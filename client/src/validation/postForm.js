import * as Yup from "yup";
export default Yup.object({
    title: Yup.string().required("title is required").max(255),
    description: Yup.string().required("description is reqired"),
    image: Yup.string().nullable(),
    tags: Yup.array().of(Yup.string()),
});
