"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  //   const onSubmit = useCallback(() => {
  //     if (!token) {
  //       setError("Missing token");
  //       return;
  //     }

  //     newVerification(token)
  //       .then((data) => {
  //         setSuccess(data.success);
  //         setError(data.error);
  //       })
  //       .catch(() => {
  //         setError("Something went wrong");
  //       });
  //   }, [token]);

  useEffect(() => {
    // if (!count) return;

    const onSubmit = () => {
      if (!token) {
        setError("Missing token");
        return;
      }

      newVerification(token)
        .then((data) => {
          setSuccess(data.success);
          setError(data.error);
        })
        .catch(() => {
          setError("Something went wrong");
        });
    };

    onSubmit();
  }, []);

  return (
    <CardWrapper
      headerLabel="Confirm your email"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        {!success && !error && <BeatLoader />}

        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};
