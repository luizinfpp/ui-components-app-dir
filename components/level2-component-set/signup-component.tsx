import { Field, Form, Formik, FormikHelpers } from 'formik'
import { start } from 'repl'
import styled from 'styled-components'
import * as Yup from 'yup'
import Lvl1ComponentsIconError from '../../public/lvl1-components-icon-error'

interface Values {
  name: string
  cardNumber: string
  expDateMM: number | undefined
  expDateYY: number | undefined
  cvc: number | undefined
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Can't be blank"),
  cardNumber: Yup.string()
    .required("Can't be blank")
    .test({
      name: 'card-number-length',
      test(value, ctx) {
        if (value && !(value.replaceAll(' ', '').length == 16)) {
          return ctx.createError({
            message: 'Card number must have 16 digits.',
          })
        }
        return true
      },
    }),
  expDateMM: Yup.string()
    .required("Can't be blank")
    .test({
      name: 'card-mm-length',
      message: 'Must be a 2 digit number',
      test(value) {
        if (value && value.length == 2) {
          return true
        }
        return false
      },
    })
    .test({
      name: 'card-mm-valid',
      message: 'Not a valid month',
      test(value) {
        if (value && Number(value) > 0 && Number(value) <= 12) {
          return true
        }
        return false
      },
    }),
  expDateYY: Yup.string()
    .required("Can't be blank")
    .test({
      name: 'card-yy-length',
      message: 'Must be a 2 digit number',
      test(value) {
        if (value && value.length == 2) {
          return true
        }
        return false
      },
    }),
  cvc: Yup.number().min(3, 'Minimum length is 3').required("Can't be blank"),
})

const Lvl2CardFormComponent = ({
  setCardNumber,
  setCardName,
  setCardExpMM,
  setCardExpYY,
  setCvc,
}: any) => {
  return (
    <div className="flex flex-col">
      <Formik
        initialValues={{
          name: '',
          cardNumber: '',
          expDateMM: undefined,
          expDateYY: undefined,
          cvc: undefined,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values: Values) => {
          console.log('Signed up!', values)
        }}
      >
        {({ values, handleChange, errors, touched, setFieldValue }) => (
          <Form>
            <div className="flex relative flex-col gap-2">
              <div className="relative flex flex-col">
                <label
                  htmlFor="lvl2CardFormName"
                  className=" text-xs uppercase my-1"
                >
                  Cardholder Name
                </label>
                <Field
                  id="lvl2CardFormName"
                  name="name"
                  placeholder="e.g John Appleseed"
                  onChange={(e: any) => {
                    setCardName(e.target.value)
                    handleChange(e)
                  }}
                  value={values.name}
                  type="text"
                  className={`focus:outline-none  text-black align-middle border rounded-md py-2 pl-5 pr-12 text-sm w-[30vw] h-12 placeholder:text-[#b9b6d3] ${
                    errors.name && touched.name
                      ? 'border-[#ff5252] focus:border-[#ff5252]'
                      : 'border-[#b9b6d3] focus:border-[#21092f]'
                  }`}
                />
                {errors.name && touched.name && (
                  <p className="text-[#ff5252] text-xs pl-5 py-2">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="relative flex flex-col">
                <label
                  htmlFor="lvl2CardFormNumber"
                  className=" text-xs uppercase my-1"
                >
                  Card Number
                </label>
                <Field
                  id="lvl2CardFormNumber"
                  name="cardNumber"
                  placeholder="e.g 1234 5678 9123 0000"
                  onChange={(e: any) => {
                    var regExp = /^\d*$/i

                    if (regExp.test(e.target.value.replaceAll(' ', ''))) {
                      if (e.target.value.replaceAll(' ', '').length <= 16) {
                        var strSet = e.target.value.split(' ')
                        var str = e.target.value

                        console.log(strSet, str)

                        if (strSet && strSet[strSet.length - 1].length > 4) {
                          //colocar espaço
                          str = str.slice(0, -1) + ' ' + str.slice(-1)
                        } else if (str && str.slice(-1) == ' ') {
                          //tirar espaço
                          str = str.slice(0, -1)
                        }

                        console.log(strSet, str)

                        setCardNumber(str)
                        setFieldValue('cardNumber', str)
                      }
                    }
                  }}
                  value={values.cardNumber}
                  type="text"
                  className={`focus:outline-none  text-black align-middle border rounded-md py-2 pl-5 pr-12 text-sm w-[30vw] h-12 placeholder:text-[#b9b6d3] ${
                    errors.cardNumber && touched.cardNumber
                      ? 'border-[#ff5252] focus:border-[#ff5252]'
                      : 'border-[#b9b6d3] focus:border-[#21092f]'
                  }`}
                />
                {errors.cardNumber && touched.cardNumber && (
                  <p className="text-[#ff5252] text-xs pl-5 py-2">
                    {errors.cardNumber}
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="lvl2CardFormExpDateMM"
                    className="text-xs uppercase my-1"
                  >
                    Exp. Date (MM/YY)
                  </label>
                  <div className="flex gap-2">
                    <Field
                      id="lvl2CardFormExpDateMM"
                      name="expDateMM"
                      placeholder="MM"
                      onChange={(e: any) => {
                        var regExp = /^\d*$/i

                        if (regExp.test(e.target.value)) {
                          if (e.target.value.length <= 2) {
                            var str = e.target.value

                            setCardExpMM(str)
                            setFieldValue('expDateMM', str)
                          }
                        }
                      }}
                      value={values.expDateMM}
                      type="text"
                      className={`focus:outline-none  text-black align-middle border rounded-md py-2 pl-5 pr-5 text-sm w-20 h-12 placeholder:text-[#b9b6d3] ${
                        errors.expDateMM && touched.expDateMM
                          ? 'border-[#ff5252] focus:border-[#ff5252]'
                          : 'border-[#b9b6d3] focus:border-[#21092f]'
                      }`}
                    />
                    <Field
                      id="lvl2CardFormExpDateYY"
                      name="expDateYY"
                      placeholder="YY"
                      onChange={(e: any) => {
                        var regExp = /^\d*$/i

                        if (regExp.test(e.target.value)) {
                          if (e.target.value.length <= 2) {
                            var str = e.target.value

                            setCardExpYY(str)
                            setFieldValue('expDateYY', str)
                          }
                        }
                      }}
                      value={values.expDateYY}
                      type="text"
                      className={`focus:outline-none  text-black align-middle border rounded-md py-2 pl-5 pr-5 text-sm w-20 h-12 placeholder:text-[#b9b6d3] ${
                        errors.expDateYY && touched.expDateYY
                          ? 'border-[#ff5252] focus:border-[#ff5252]'
                          : 'border-[#b9b6d3] focus:border-[#21092f]'
                      }`}
                    />
                  </div>
                  {((errors.expDateMM && touched.expDateMM) ||
                    (errors.expDateYY && touched.expDateYY)) && (
                    <p className="text-[#ff5252] text-xs pl-5 py-2">
                      {errors.expDateMM ? errors.expDateMM : errors.expDateYY}
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lvl2CardFormCvc"
                    className="text-xs uppercase my-1"
                  >
                    CVC
                  </label>
                  <div className="flex gap-2">
                    <Field
                      id="lvl2CardFormCvc"
                      name="cvc"
                      placeholder="e.g. 123"
                      onChange={(e: any) => {
                        var regExp = /^\d*$/i

                        if (regExp.test(e.target.value)) {
                          if (e.target.value.length <= 3) {
                            var str = e.target.value

                            setCvc(str)
                            setFieldValue('cvc', str)
                          }
                        }
                      }}
                      value={values.cvc}
                      type="text"
                      className={`focus:outline-none  text-black align-middle border rounded-md py-2 pl-5 pr-5 text-sm h-12 placeholder:text-[#b9b6d3] ${
                        errors.cvc && touched.cvc
                          ? 'border-[#ff5252] focus:border-[#ff5252]'
                          : 'border-[#b9b6d3] focus:border-[#21092f]'
                      }`}
                    />
                  </div>
                  {errors.cvc && touched.cvc && (
                    <p className="text-[#ff5252] text-xs pl-5 py-2">
                      {errors.cvc}
                    </p>
                  )}
                </div>
              </div>

              <button
                className="rounded-md bg-[#21092f] py-3 mt-3 w-[100%] text-white text-md active:bg-none active:bg-[#370f4e]"
                type="submit"
              >
                <span>Confirm</span>
              </button>

              <h6 className="text-xs text-[#b9b6d3] text-center">
                By clicking the button you agree with our{' '}
                <span className="text-[#ff5252] font-[600]">
                  Terms and Services
                </span>
              </h6>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Lvl2CardFormComponent
