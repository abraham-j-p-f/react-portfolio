import { useId, useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareEnvelope,
  faXmark,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";
import credentialsEmailjs from "../../services/Email";

const FormField = ({
  label,
  placeholder,
  id,
  type,
  value,
  setValue,
  name,
}: any) => {
  return (
    <div className="my-3 space-y-2 w-full">
      <div>
        <input
          type={type}
          name={name}
          id={`${type}-field-${id}`}
          placeholder={placeholder}
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          className="rounded-md w-full px-4 py-2 bg-t_blue-dark text-t_white placeholder:text-t_white-dark outline-none"
        />
      </div>
    </div>
  );
};

const Alert = ({ alert, setAlert, children, icon, className = "" }: any) => {
  return (
    <div
      className={`absolute top-10 ${
        alert ? "right-4" : "-right-full"
      } transition-all p-4 space-x-3 bg-t_white rounded-lg flex items-center justify-between ${className}`}
    >
      <FontAwesomeIcon className="text-4xl " icon={icon} />
      <div className="flex justify-center">
        <span className="font-litia text-lg">{children}</span>
        <button className="px-2" onClick={() => setAlert(false)}>
          <FontAwesomeIcon className="text-2xl" icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default function Contact() {
  const id = useId();
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState(true);
  const [alert, setAlert] = useState(false);

  function sendEmail(e: any) {
    e.preventDefault();
    setAlert(false)
    emailjs
      .sendForm(
        credentialsEmailjs.service,
        credentialsEmailjs.template,
        e.target,
        credentialsEmailjs.user
      )
      .then(
        (result: any) => {
          setSubject("");
          setEmail("");
          setBody("");
          setStatus(true)
          setAlert(true);
        },
        (error) => {
          setStatus(false)
          setAlert(true);
        }
      );
    e.target.reset();
  }

  return (
    <div className="h-screen bg-t_blue flex justify-center relative">
      <div className="h-full aspect-square max-w-full flex justify-center items-center bg-t_blue py-8 text-t_yellow">
        <form
          onSubmit={sendEmail}
          action=""
          className="w-full sm:w-3/4 px-4 max-h-full overflow-y-auto"
        >
          <div>
            <h1 className="font-litia text-4xl sm:text-5xl">Contact me</h1>
          </div>
          <FormField
            id={id}
            placeholder="Give me your email"
            type="email"
            name="email"
            value={email}
            setValue={setEmail}
          />
          <FormField
            id={id}
            placeholder="What do you have in mind?"
            type="text"
            name="subject"
            value={subject}
            setValue={setSubject}
          />
          <div className="my-3 space-y-2 w-full">
            <div>
              <textarea
                placeholder="Please, explain me it"
                name="body"
                id={`body-field-${id}`}
                cols={30}
                rows={10}
                value={body}
                onChange={(e: any) => setBody(e.target.value)}
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
      <Alert
        alert={alert}
        setAlert={setAlert}
        icon={status ? faSquareEnvelope : faFaceFrown}
        className={status ? "text-t_blue-light" : "text-t_tred-dark"}
      >
        {status
          ? "Tu mensaje ha sido entregado!"
          : "Lo siento, algo ha fallado"}
      </Alert>
    </div>
  );
}
