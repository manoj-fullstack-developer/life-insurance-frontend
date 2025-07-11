"use client";
import React from "react";
import { Modal, Typography } from "antd";
import styles from "./index.module.css";

const { Title, Paragraph } = Typography;

type RecommendationModalProps = {
  isShowModal: boolean;
  handleOnCancel: () => void;
  recommendation: string;
  explanation: string;
};

const RecommendationResultModal = ({
  recommendation,
  explanation,
  handleOnCancel,
  isShowModal,
}: RecommendationModalProps) => {
  return (
    <Modal
      open={isShowModal}
      onCancel={handleOnCancel}
      footer={null}
      centered
      className={styles.modal}
    >
      <div className={styles.content}>
        <Title level={4}>🎉 Your Recommendation</Title>
        <Paragraph strong className={styles.recommendation}>
          {recommendation}
        </Paragraph>
        <Paragraph className={styles.explanation}>{explanation}</Paragraph>
      </div>
    </Modal>
  );
};

export default RecommendationResultModal;
