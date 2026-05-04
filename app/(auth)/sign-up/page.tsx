"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/forms/inputField";
import SelectField from "@/components/forms/SelectField";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";

type SignUpFormData = {
  email: string;
  password: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="form-title">Sign in & personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name is required", minLength: 2 }}
        />
        <InputField
          name="email"
          label="email"
          placeholder="chanuka@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: /^\w+\.\w+$/,
            message: "Email address is required",
          }}
        />
        <InputField
          name="password"
          label="password"
          placeholder="Enter a strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: "password is required",
            minLength: 8,
          }}
        />

        <CountrySelectField
          name="country"
          label="Country"
          control={control}
          error={errors.country}
          required
        />
        <SelectField
          name="investmentGoal"
          label="Investment Goals"
          placeholder="select your investment goal"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoal}
          required
        />
        <SelectField
          name="riskTolerance"
          label="Risk Tolerance"
          placeholder="select your risk level"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting
            ? "Creating account..."
            : "Start Your Investing Journey"}
        </Button>

        <FooterLink
          text="Alredy have an account"
          linkText="signIn"
          href="/sign-in"
        ></FooterLink>
      </form>
    </>
  );
};

export default SignUp;
