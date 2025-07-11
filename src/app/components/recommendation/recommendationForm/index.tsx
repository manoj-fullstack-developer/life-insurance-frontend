import { Form, Select, Button, Input, Col, Row } from "antd";
import React from "react";
import styles from "./index.module.css";
import { IRecommendationRequest } from "@/app/interfaces/recommendation/index.request";
import { useRouter } from "next/navigation";
import common from "@/app/utils/common";

const { Option } = Select;

const RecommendationForm = ({
  handleOnFinish,
  loading,
}: {
  handleOnFinish: (val: IRecommendationRequest) => void;
  loading?: boolean;
}) => {
  const router = useRouter();
  return (
    <Form layout="vertical" name="insuranceForm" onFinish={handleOnFinish}>
      <Row gutter={25}>
        <Col span={24} md={12}>
          <label className={styles.label}>Age</label>
          <Form.Item
            name="age"
            hasFeedback
            rules={[
              { required: true, message: "Please enter your age" },
              {
                validator: common.numberValidator("Age", {
                  min: 18,
                  allowZero: false,
                }),
              },
            ]}
          >
            <Input
              className={styles.input}
              name="age"
              placeholder="Enter your age"
              type="number"
            />
          </Form.Item>
        </Col>
        <Col span={24} md={12}>
          <label className={styles.label}>Income</label>
          <Form.Item
            name="income"
            hasFeedback
            rules={[
              { required: true, message: "Please enter your income" },
              {
                validator: common.numberValidator("Income", {
                  min: 0,
                  allowZero: false,
                }),
              },
            ]}
          >
            <Input
              className={styles.input}
              name="income"
              placeholder="Enter your annual income"
              type="number"
            />
          </Form.Item>
        </Col>
        <Col span={24} md={12}>
          <label className={styles.label}>Dependents</label>
          <Form.Item
            name="dependents"
            hasFeedback
            rules={[
              { required: true, message: "Please enter number of dependents" },
              {
                validator: common.numberValidator("Dependents", {
                  min: 0,
                  allowZero: false,
                }),
              },
            ]}
          >
            <Input
              className={styles.input}
              name="dependents"
              placeholder="Enter number of dependents"
              type="number"
            />
          </Form.Item>
        </Col>
        <Col span={24} md={12}>
          <label className={styles.label}>Risk of Tolerance</label>
          <Form.Item
            name="riskTolerance"
            hasFeedback
            rules={[
              { required: true, message: "Please select your risk tolerance" },
            ]}
          >
            <Select
              className={styles.input}
              placeholder="Select risk tolerance"
            >
              <Option value="Low">Low</Option>
              <Option value="Medium">Medium</Option>
              <Option value="High">High</Option>
            </Select>
          </Form.Item>
        </Col>
        <br />
        <Col className={styles.buttonContainer} span={24}>
          <Form.Item>
            <Button
              disabled={loading}
              onClick={() => router.push("/")}
              className={styles.button}
            >
              Cancel
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              className={styles.button}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default RecommendationForm;
