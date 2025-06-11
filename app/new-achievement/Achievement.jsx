"use client";
import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "@/lib/firebaseConfig";

const Achievement = ({ session }) => {
  const initialValues = {
    position: "",
    achievement: "",
  };

  const validationSchema = Yup.object({
    position: Yup.string().required("Position is a required field"),
    achievement: Yup.string()
      .required("Achievements is a required field")
      .min(5, "Minimum of 5 characters"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const achievementData = {
        image: session?.user?.image,
        author: session?.user?.name,
        timestamp: new Date().toLocaleDateString(),
        ...values,
      };
      const docRef = await addDoc(collection(db, "achievements"), achievementData)
      console.log(achievementData);
      console.log("Document written with ID: ", docRef.id);
      resetForm();
    } catch (error) {
      console.error("Error sending achievement", error);
      alert("An error occurred.");
    }
  };

  return (
    <main className="min-h-dvh md:p-5 p-2">
      <h1 className="text-center text-gray-800 md:text-3xl text-xl font-bold">
        Share your achievements with the community
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="max-w-3xl mx-auto my-5 space-y-5">
          <div>
            <Field
              type="text"
              placeholder="Position..."
              name="position"
              className="border border-gray-200 p-3 outline-none w-full rounded-md shadow"
            />
            <ErrorMessage
              name="position"
              component="p"
              className="text-xs text-red-600 mt-2"
            />
          </div>

          <div>
            <Field
              as="textarea"
              placeholder="Share your achievements..."
              name="achievement"
              className="border border-gray-200 p-3 outline-none w-full rounded-md shadow"
            />
            <ErrorMessage
              name="achievement"
              component="p"
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
