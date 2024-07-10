import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
  const data = useActionData();
  return (
    <div className="flex flex-col md:items-center">
      <p className="font-bold text-xl py-2">Contact Us</p>
      <Form
        method="post"
        action=""
        className="flex flex-col gap-4 text-black md:w-1/2"
      >
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            className="w-full outline-none p-1"
            placeholder="Email:"
            required
          />
        </label>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            required
            rows="10"
            className="w-full outline-none p-1"
            placeholder="Message:"
          ></textarea>
        </label>
        <button className="bg-emerald-600 text-white p-2 md:w-1/2 md:mx-auto">
          Submit
        </button>
        {data && data.error && <p className="text-red-400">{data.error}</p>}
      </Form>
    </div>
  );
};
export default Contact;

export const contactFormAction = async ({ request }) => {
  const data = await request.formData();
  if (data.get("message").length < 5) {
    return { error: "Too short message" };
  }
  return redirect("/");
};
