
import { Modal } from "antd";

export function successMessage(message) {
    const modal = Modal.success({
      title: "Success notification",
      content: message,
    });
    setTimeout(() => modal.destroy(), 5000);
  }
export function failureMessage(message) {
    const modal = Modal.error({
      title: "Failure notification",
      content: message,
    });
    setTimeout(() => modal.destroy(), 5000);
  }