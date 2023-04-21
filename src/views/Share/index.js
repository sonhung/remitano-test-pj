import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Link from "next/link";

import { Button } from "@/components/base";
import { TextInput } from "@/components/form";
import { useAuth } from "@/contexts";
import {
  shareFormSchema,
  shareInitialValues,
  FORM_SAHRE,
} from "@/validations/shareSchema";
import { useShare } from "@/hooks";
import { ROUTER } from "@/constants";

const Share = () => {
  const { email } = useAuth();
  const methods = useForm({
    resolver: yupResolver(shareFormSchema()),
    defaultValues: shareInitialValues,
  });

  const { doShare, isLoading, isSuccess } = useShare({
    onSuccess: () => {
      methods.reset();
      toast.success("The video has been shared!");
    },
  });

  const handleShare = (values) => {
    doShare({ ...values, sharedBy: email });
  };

  return (
    <div className="w-[90vw] max-w-[500px] mx-auto border rounded-lg p-10 mt-10 relative">
      <div className="absolute -top-4 left-5 bg-white font-bold text-lg text-sky-500 px-2">
        Share a Youtube mobie
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleShare)}>
          <TextInput
            label="Youtube url"
            name={FORM_SAHRE.LINK}
            placeholder="Youtube url"
          />
          <TextInput
            label="Description"
            name={FORM_SAHRE.DESCRIPTION}
            placeholder="Description"
            className="my-4"
          />
          <div className="flex justify-center mt-4">
            <Button type="submit" className="w-80" loading={isLoading}>
              Share
            </Button>
          </div>
          {isSuccess && (
            <div className="flex justify-center mt-1">
              <Link
                href={ROUTER.HOME}
                className="flex justify-center items-center mt-4 w-80 rounded-lg h-10 border border-sky-500 font-bold"
              >
                View Shared Videos
              </Link>
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default Share;
