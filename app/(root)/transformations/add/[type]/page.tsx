import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AddTransformTypePage = async ({ params: { type } }: SearchParamProps) => {
  // Review code changes with original. You made a fix.
  const clerkUser = auth();
  const transformation = transformationTypes[type];

  if (!clerkUser.userId) redirect("/sign-in");

  const user = await getUserById(clerkUser.userId);

  return (
    <>
      <Header title={transformation.title} subTitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformTypePage;
