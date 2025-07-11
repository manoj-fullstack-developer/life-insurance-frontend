"use client";

import React, { useState } from "react";
import Container from "../components/shared/container";
import { App, Card, Typography } from "antd";
import RecommendationForm from "../components/recommendation/recommendationForm";
import { IRecommendationRequest } from "../interfaces/recommendation/index.request";
import axios, { HttpStatusCode } from "axios";
import RecommendationResultModal from "../components/recommendation/recommendationResultModal";
import { useRouter } from "next/navigation";

const AddRecommendation = () => {
  const { Title } = Typography;
  const { notification } = App.useApp();
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [resultModalVisible, setResultModalVisible] = useState(false);
  const [recommendationResult, setRecommendationResult] = useState({
    recommendation: "",
    explanation: "",
  });

  const handleOnFinish = async (values: IRecommendationRequest) => {
    try {
      setLoader(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/recommendation`,
        values
      );

      if (res.status !== HttpStatusCode.Created) {
        throw new Error("Failed to submit recommendation");
      }
      setRecommendationResult(res.data);
      setResultModalVisible(true);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      notification.error({
        message:
          error?.message || "Something went wrong while submitting form!",
      });
    }
    setLoader(false);
  };

  const handleOnCloseResultModal = () => {
    setResultModalVisible(false);
    router.push("/");
  };

  return (
    <Container>
      <Card>
        <Title level={4}>Get Recommendation</Title>
        <br />
        <RecommendationForm loading={loader} handleOnFinish={handleOnFinish} />
      </Card>
      {resultModalVisible && (
        <RecommendationResultModal
          isShowModal={resultModalVisible}
          handleOnCancel={handleOnCloseResultModal}
          recommendation={recommendationResult.recommendation}
          explanation={recommendationResult.explanation}
        />
      )}
    </Container>
  );
};

export default AddRecommendation;
