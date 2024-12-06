"use client";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import Link from "next/link";
import SubmitButton from "../_component/SubmitButton";
import {
  adminBgStyle,
  mainBtnStyle1,
  textInputStyle,
} from "../constants/style";
import createUniversity from "../_actions/createUniversity"; // This should be the action for creating a university

export default function New() {
  const initialData = {
    name: "",
    state: "",
    city: "",
    rank: "",
    description: "",
    website: "",
    studentCount: "",
    acceptance: "",
    type: "",
    imageUrl: "",
  };
  const [data, action] = useFormState(createUniversity, initialData);

  if (data.message) {
    redirect("/university"); // Redirect on success
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${adminBgStyle}`}
    >
      <hr />
      <div className="text-white text-3xl font-semibold mt-10">
        Admin Section
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-2xl h-full mt-6">
        <div className="text-black text-center text-3xl font-semibold mb-6">
          Create New University
        </div>
        <form action={action} className="mt-4">
          {Object.entries(initialData).map(([key, value]) => (
            <div className="flex flex-col mb-2" key={key}>
              <label htmlFor={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                className={textInputStyle}
                type={key === "website" || key === "imageUrl" ? "url" : "text"}
                name={key}
                id={key}
                defaultValue={value}
                required
              />
              {data.error?.[key] && (
                <div className="text-red-600">{data.error?.[key][0]}</div>
              )}
            </div>
          ))}
          {data.error?.message && (
            <div className="text-red-600">{data.error?.message}</div>
          )}
          <SubmitButton label="Create" />
        </form>
      </div>
      <br />
      <hr />
      <Link href="/university" className={`${mainBtnStyle1} mb-10`}>
        Back
      </Link>
    </div>
  );
}
