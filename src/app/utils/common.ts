import { RuleObject } from "antd/es/form";
import { StoreValue } from "antd/es/form/interface";

const numberValidator = (
  fieldName: string,
  options: { min?: number; allowZero?: boolean }
) => {
  return (_: RuleObject, value: StoreValue) => {
    if (!value) {
      return Promise.resolve();
    }

    const numericValue = Number(value);

    if (isNaN(numericValue)) {
      return Promise.reject(`${fieldName} must be a valid number.`);
    }

    if (options.min !== undefined) {
      const meetsMinimum = options.allowZero
        ? numericValue >= options.min
        : numericValue > options.min;

      if (!meetsMinimum) {
        const condition = options.allowZero ? "at least" : "greater than";
        return Promise.reject(
          `${fieldName} must be ${condition} ${options.min}.`
        );
      }
    }

    return Promise.resolve();
  };
};

export default { numberValidator };
