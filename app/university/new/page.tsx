"use client";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import Link from "next/link";
import SubmitButton from "../_component/SubmitButton";
import { style } from "../constants/style";
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
    <>
      <h1>Create New University</h1>
      <hr />
      <form action={action} className="mt-4">
        {Object.entries(initialData).map(([key, value]) => (
          <div className="flex flex-col mb-2" key={key}>
            <label htmlFor={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <input
              className={style}
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
      <br />
      <hr />
      <Link href="/university">Back</Link>
    </>
  );
}
