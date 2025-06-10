"use client";
import React, { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const Achievement = ({ session }) => {
  const [position, setPosition] = useState("");
  const [achievement, setAchievement] = useState("");
  console.log(session);

  const iv = {
    position: "",
    achievement: "",
  };

  const vs = Yup.object({
    position: Yup.string().required("Position is a required field"),
    achievement: Yup.string()
      .required("Achievements is a required field")
      .min(5, "Mininum of 5 characters"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const achievementData = {
      image: session?.user?.image,
      author: session?.user?.name,
      timestamp: new Date().toLocaleDateString(),
      position,
      achievement,
    };

    console.log(achievementData);
  };

  return (
    <main className="min-h-dvh md:p-5 p-2">
      <h1 className="text-center text-gray-800 md:text-3xl text-xl font-bold">
        Share your achievements with the community
      </h1>

      <Formik initialValues={iv} validationSchema={vs}>
        <Form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto my-5 space-y-5"
        >
          <div>
            <Field
              type="text"
              placeholder="Position..."
              name="position"
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
              className="border border-gray-200 p-3 outline-none w-full rounded-md shadow"
            />
            <ErrorMessage
              name="position"
              component={"p"}
              className="text-xs text-red-600 mt-2"
            />
          </div>

          <div>
            <Field
              as="textarea"
              placeholder="Share your achievements..."
              name="achievement"
              value={achievement}
              onChange={(e) => {
                setAchievement(e.target.value);
              }}
              className="border border-gray-200 p-3 outline-none w-full rounded-md shadow"
            />
            <ErrorMessage
              name="achievement"
              component={"p"}
              className="text-xs text-red-600 mt-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white flex items-center justify-center p-3 rounded-md w-full font-semibold hover:bg-blue-600 transition-colors duration-200 outline-none"
          >
            Share Achievement
          </button>
        </Form>
      </Formik>
    </main>
  );
};

export default Achievement;
