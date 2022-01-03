import React from "react";
import classnames from "classnames";
import styles from "./index.module.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = process.env.REACT_APP_MAILCHIMP_URL;

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });
  
  return (
    <div>
      <div className={styles.form}>
        <input
          ref={(node) => (email = node)}
          id="email"
          type="email"
          name="email"
          placeholder="Enter email address"
          className={styles.email}
        />
        <button
          className={classnames({
            [styles["email-btn"]]: true,
          })}
          onClick={submit}
        >
          Become a Madtrooper
        </button>
      </div>
      <div style={{ height: "50px" }}>
        {status === "sending" && (
          <div style={{ color: "white" }}>
            <p>Sending...</p>
          </div>
        )}
        {status === "error" && (
          <p
            style={{ color: "white" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "white" }}>
            <p>Subscribed !</p>
          </div>
        )}
      </div>
    </div>
  );
};

function ContactForm() {
  return (
    <>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
}

export default ContactForm;
