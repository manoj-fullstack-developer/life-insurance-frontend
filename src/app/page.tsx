"use client";
import { App, Button, Table, Typography } from "antd";
import Container from "./components/shared/container";
import styles from "./page.module.css";
import { useCallback, useEffect, useState } from "react";
import axios, { HttpStatusCode } from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { IPaginationRequest } from "./types";
import { IRecommendationResponseData } from "./interfaces/recommendation/index.request";
import { useRouter } from "next/navigation";

export default function Home() {
  const { Title } = Typography;
  const { notification } = App.useApp();
  const [pagination, setPagination] = useState<IPaginationRequest>({
    limit: 10,
    page: 1,
  });
  const [recommendationsList, setRecommendationsList] =
    useState<IRecommendationResponseData>();
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  const recommendationColumns = [
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Income",
      dataIndex: "income",
      key: "income",
    },
    {
      title: "Dependents",
      dataIndex: "dependents",
      key: "dependents",
    },
    {
      title: "Risk Tolerance",
      dataIndex: "riskTolerance",
      key: "riskTolerance",
    },
    {
      title: "Recommendation",
      dataIndex: "recommendation",
      key: "recommendation",
    },
  ];

  const getRecommendations = useCallback(
    async (params: IPaginationRequest) => {
      try {
        setLoader(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/recommendation`,
          { params }
        );

        if (response.status !== HttpStatusCode.Ok) {
          throw new Error("Error fetching recommendations");
        }

        setRecommendationsList(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        notification.error({
          message: "Error",
          description: error?.message || "Failed to fetch recommendations",
        });
      }
      setLoader(false);
    },
    [notification]
  );

  useEffect(() => {
    getRecommendations(pagination);
  }, [pagination, getRecommendations]);

  return (
    <Container>
      <div className={styles.headerContainer}>
        <Title level={4} className={styles.title}>
          Recommendations
        </Title>
        <Button
          onClick={() => router.push("/get-recommendation")}
          size="large"
          type="primary"
          icon={<PlusOutlined />}
        >
          Recommendation
        </Button>
      </div>
      <br />
      <Table
        scroll={{ x: 400 }}
        columns={recommendationColumns}
        dataSource={recommendationsList?.data}
        loading={loader}
        rowKey="id"
        pagination={{
          current: recommendationsList?.page,
          pageSize: recommendationsList?.limit,
          total: recommendationsList?.total,
          hideOnSinglePage: true,
          onChange: (page, pageSize) => {
            setPagination({ page, limit: pageSize });
          },
        }}
      />
    </Container>
  );
}
