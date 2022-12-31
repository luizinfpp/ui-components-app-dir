import { Field, Form, Formik, FormikHelpers } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import Lvl1ComponentsIconError from '../../public/lvl1-components-icon-error'

const Button = styled.button`
  &:hover {
    box-shadow: 0 0 12px 5px #ee8c8c99;
  }
`
interface Values {
  email: string
}

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please provide a valid e-mail')
    .required('E-mail is required'),
})

const Lvl1PinkGradientBtn = () => {
  return (
    <div className="flex flex-col">
      <Formik
        initialValues={{ email: '' }}
        validationSchema={EmailSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log('Submit sent! Email: ' + values.email)
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <div className="flex relative">
              <Field
                id="lvl1PinkGradientInput"
                name="email"
                placeholder="Email address"
                onChange={handleChange}
                value={values.email}
                type="email"
                className={`focus:outline-none placeholder:text-[#ce9797cc] text-[#413a3a] align-middle border rounded-3xl py-2 pl-7 pr-28 text-lg w-[30vw] h-12 ${
                  errors.email && touched.email
                    ? 'border-[#eb4141] focus:border-[#eb4141]'
                    : 'border-[#ce9797] focus:border-[#864343]'
                }`}
              />

              <div className="absolute top-0 right-0 flex h-[100%] gap-1">
                <div className="flex items-center justify-center opacity-0">
                  <Lvl1ComponentsIconError />
                </div>
                <Button
                  className="w-20 h-[100%] rounded-3xl bg-gradient-to-br from-[#f8bfbf] to-[#ee8c8c]  text-white font-[300] text-2xl active:bg-none active:bg-[#fff5f5] active:text-[#ee8c8c]"
                  type="submit"
                >
                  &gt;
                </Button>
              </div>
            </div>
            {errors.email && touched.email ? (
              <h6 className="pl-7 my-3 text-sm text-[#eb4141]">
                {errors.email}
              </h6>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Lvl1PinkGradientBtn
