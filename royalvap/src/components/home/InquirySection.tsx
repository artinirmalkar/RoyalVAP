'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Container from '../Container';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone Number is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

export default function InquirySection() {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('Form submitted:', values);
      setSubmitted(true);
      resetForm();
    },
  });

  return (
    <div
      className="relative bg-black py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/inquiry-background.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Container className="relative z-10 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
        <div className="max-w-xl ">
          <h2 className="text-md uppercase  tracking-wide text-purple-300">
            RoyalVAP - Chhattisgarh&apos;s Very Own Event Company
          </h2>
          <h2 className="text-3xl font-bold mb-4 uppercase mt-3 text-white ">
            Looking for the Most Creative & Innovative Event Planners in Chhattisgarh India?
          </h2>
          <p className=" mb-4 text-white">
            Imagine celebrating the most special events of your life without worrying about a single
            thing. RoyalVAP Events is here to make your dream events come true! Our expert event
            management team offers professional event planning and management services in cities,
            villages, and small towns across Chhattisgarh India, from south to north, using creative and
            innovative methods to plan and curate perfect, hassle-free celebrations that will
            captivate your attendees.
          </p>
          <p className="mb-6 text-white">
            Contact us today to bring your vision to life and create unforgettable memories!
          </p>
        </div>
        <div className="rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={formik.handleSubmit}>
            <Input
              name="fullName"
              placeholder="Enter your Full Name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-4 bg-white"
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-red-500 text-sm">{formik.errors.fullName}</p>
            )}

            <Input
              name="phoneNumber"
              placeholder="Enter your Phone Number"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-4 bg-white"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <p className="text-red-500 text-sm">{formik.errors.phoneNumber}</p>
            )}

            <Input
              name="email"
              type="email"
              placeholder="Enter your Email ID"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-4 bg-white"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}

            <textarea
              name="message"
              placeholder="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full p-2 border  rounded-md mt-4 bg-white"
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}

            <Button
              type="submit"
              className="w-fit bg-purple-700 cursor-pointer hover:bg-purple-800 mt-2"
            >
              SUBMIT
            </Button>
          </form>

          {submitted && (
            <p className="text-green-500 mt-4">
              Thank you! Your message has been submitted successfully.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
