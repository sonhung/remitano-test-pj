import * as Yup from "yup";

const FORM_SAHRE = {
  LINK: "link",
  DESCRIPTION: "description",
};

const shareInitialValues = {
  [FORM_SAHRE.LINK]: "",
  [FORM_SAHRE.DESCRIPTION]: "",
};

const shareFormSchema = () =>
  Yup.object().shape({
    [FORM_SAHRE.LINK]: Yup.string().required("Please input youtube link"),
  });

export { shareFormSchema, shareInitialValues, FORM_SAHRE };
