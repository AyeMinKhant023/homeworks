"use client";
import { useFormStatus } from "react-dom";
import { adminBtnStyle, textInputStyle } from "../constants/style";

export default function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      className={`${adminBtnStyle} mt-6`}
      disabled={pending}
      type="submit"
    >
      {pending ? "Submitting..." : label}
    </button>
  );
}
