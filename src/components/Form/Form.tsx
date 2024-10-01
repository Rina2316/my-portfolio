import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import styles from "./Form.module.scss";


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Имя или название компании обязательно'),
  email: Yup.string().email('Неверный формат email').required('Обязательное поле'),
  phone: Yup.string().matches(/^\+?[1-9]\d{1,14}$/, 'Неверный формат номера телефона').required('Номер телефона обязателен'),
  message: Yup.string()
});


const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm: React.FC = () => {

  const sendEmail = (values: typeof initialValues) => {
    emailjs.send(
      'service_vdxhyss',  // Заменить на ID сервиса EmailJS
      'template_vps6tru',  // Заменить на ID шаблона EmailJS
      {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        message: values.message,
      },
      '_5LBZfPtR6z6oxjjU'  // Заменить на пользовательский ID из EmailJS
    )
    .then((response) => {
      console.log('Email отправлен успешно!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Ошибка при отправке письма:', error);
    });
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          sendEmail(values);
          setSubmitting(false);
          resetForm();  // Сброс формы после успешной отправки
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Как к вам обращаться?</label>
              <Field name="name" type="text" placeholder="Введите имя или название компании" />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Ваш email</label>
              <Field name="email" type="email" placeholder="Введите вашу почту" />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Ваш номер телефона</label>
              <Field name="phone" type="text" placeholder="Введите ваш номер телефона" />
              <ErrorMessage name="phone" component="div" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Ваше сообщение</label>
              <Field name="message" as="textarea" placeholder="Введите ваше сообщение" />
              <ErrorMessage name="message" component="div" className={styles.error} />
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
              Отправить сообщение
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
