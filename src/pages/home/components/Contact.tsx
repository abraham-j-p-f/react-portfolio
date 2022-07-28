import { useId } from "react";

const FormField = ({ label, placeholder, id, type }: any) => {
  return (
    <div className="my-3 space-y-2 w-full">
      <div>
        <label className="font-litia" htmlFor={`${type}-field-${id}`}>
          {label}
        </label>
      </div>
      <div>
        <input
          type={type}
          name=""
          id={`${type}-field-${id}`}
          placeholder={placeholder}
          className="rounded-md w-full px-4 py-2 bg-t_blue-dark text-t_white placeholder:text-t_white-dark outline-none"
        />
      </div>
    </div>
  );
};

export default function Contact() {
  const id = useId();
  return (
    <div className="h-screen bg-t_white flex justify-center">
      <div className="h-full aspect-square max-w-full flex justify-center items-start bg-t_blue py-8 text-t_yellow">
        <form action="" className="w-full sm:w-3/4 px-4 max-h-full overflow-y-auto">
          <div>
            <h1 className="font-litia text-4xl sm:text-5xl">What will we work on?</h1>
          </div>
          <FormField
            label="Give me your email"
            id={id}
            placeholder="chad@giga.com"
            type="email"
          />
          <FormField
            label="What do you have in mind?"
            id={id}
            placeholder="I have a big idea..."
            type="text"
          />
          <div className="my-3 space-y-2 w-full">
            <div>
              <label className="font-litia" htmlFor={`body-field-${id}`}>
                Please, explain me it
              </label>
            </div>
            <div>
              <textarea
                placeholder="Hi fella, i want to have an insane website"
                name=""
                id={`body-field-${id}`}
                cols={30}
                rows={10}
                className="rounded-md w-full px-4 py-2 bg-t_blue-dark text-t_white placeholder:text-t_white-dark outline-none"
              ></textarea>
            </div>
          </div>
          <div className="flex">
            <input
              type="submit"
              value="Send"
              className="w-full h-full bg-t_yellow hover:bg-t_yellow-dark transition-all text-t_blue font-litia text-xl cursor-pointer rounded-md px-4 py-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
