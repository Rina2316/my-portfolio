import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import styles from "./Form.module.scss";
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation('common');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('form.name_required')),
    email: Yup.string().email(t('form.email_invalid')).required(t('form.email_required')),
    phone: Yup.string().matches(/^\+?[1-9]\d{1,14}$/, t('form.phone_invalid')).required(t('form.phone_required')),
    message: Yup.string(),
  });

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

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
              <label htmlFor="name">{t('form.name_label')}</label>
              <Field name="name" type="text" placeholder={t('form.name_placeholder')} />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">{t('form.email_label')}</label>
              <Field name="email" type="email" placeholder={t('form.email_placeholder')} />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">{t('form.phone_label')}</label>
              <Field name="phone" type="text" placeholder={t('form.phone_placeholder')} />
              <ErrorMessage name="phone" component="div" className={styles.error} />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{t('form.message_label')}</label>
              <Field name="message" as="textarea" placeholder={t('form.message_placeholder')} />
              <ErrorMessage name="message" component="div" className={styles.error} />
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
              {t('form.submit_button')}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
