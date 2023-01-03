import { Field, Form, Formik, FormikHelpers } from 'formik'
import styled from 'styled-components'
import * as Yup from 'yup'
import Lvl1ComponentsIconError from '../../public/lvl1-components-icon-error'

interface Values {
  firstName: string,
  lastName: string,
  email: string,
  password: string
}

const ButtonContainer = styled.div`
  position: relative;
  z-index: 20;

  .btnShadow {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: #1c7c53;
      z-index: -1;
      box-shadow: 0 0 0 2px #1c7c53, 0 0.25em 0 0 #1c7c53;
      transform: translate3d(0, 0.3em, -0.5em);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }

    &:hover {
      transform: translate(0, 0.25em);
      .btnShadow {
        box-shadow: 0 0 0 2px #1c7c53, 0 0.2em 0 0 #1c7c53;
        transform: translate3d(0, 0.5em, -1em);
      }
    }
    &:active {
      transform: translate(0em, 0.75em);
      .btnShadow {
        box-shadow: 0 0 0 2px #1c7c53, 0 0 #1c7c53;
        transform: translate3d(0, 0, -1em);
      }
    }
`

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required field'),
  lastName: Yup.string().required('Last name is required field'),
  // email: Yup.string()
  //   .email('Please provide a valid e-mail')
  //   .required('Email is required field'),
  password: Yup.string().min(8, 'Password minimum length is 8').max(16, 'Password maximum length is 16').required('Password is required field')})

  const validateEmail = (emailValue : string, setFieldValue: Function) => {
    let errorMessage;
    var regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!emailValue) {
      errorMessage = 'Email is required field';
    }    
    else if (!regExp.test(emailValue)) {
      
      errorMessage = 'Please provide a valid e-mail';
    }
    
    setFieldValue('email', '', false);

    return errorMessage;
  };

const Lvl1SignupComponent = () => {
  return (
    <div className="flex flex-col">
      <Formik
        initialValues={{   firstName: '',
          lastName: '',
          email: '',
          password: '' }}
        validationSchema={SignupSchema}
        validateOnChange={false} validateOnBlur={false}
        onSubmit={(values: Values) => {
          console.log('Signed up!', values)
        }}
      >
        {({ values, handleChange, errors, touched, setFieldValue }) => (
          <Form>
            <div className="flex relative flex-col gap-4">
              <div className='relative'>
                <Field
                  id="lvl1SignupFirstName"
                  name="firstName"
                  placeholder={errors.firstName? errors.firstName : "First Name"}
                  onChange={handleChange}
                  value={values.firstName}
                  type="text"
                  className={`focus:outline-none  text-black align-middle border rounded-md py-2 pl-5 pr-12 text-sm font-[600] w-[30vw] h-12 ${
                    errors.firstName && touched.firstName
                      ? 'border-[#ff7a7a] focus:border-[#ff7a7a] placeholder:text-[#ff7a7a]'
                      : 'border-[#b9b6d3] focus:border-[#6055a5] placeholder:text-[#b9b6d3]'
                  }`}
                />
                {errors.firstName && touched.firstName && (
                  <div className="absolute right-0 top-0 h-[100%] px-2 flex items-center justify-center">
                    <Lvl1ComponentsIconError />
                  </div>
                )}
              </div>

              <div className='relative'>
                <Field
                  id="lvl1SignupLastName"
                  name="lastName"
                  placeholder={errors.lastName? errors.lastName : "Last Name"}
                  onChange={handleChange}
                  value={values.lastName}
                  type="text"
                  className={`focus:outline-none text-black align-middle border rounded-md py-2 pl-5 pr-12 text-sm font-[600] w-[30vw] h-12 ${
                    errors.lastName && touched.lastName
                    ? 'border-[#ff7a7a] focus:border-[#ff7a7a] placeholder:text-[#ff7a7a]'
                    : 'border-[#b9b6d3] focus:border-[#6055a5] placeholder:text-[#b9b6d3]'
                  }`}
                />
                {errors.lastName && touched.lastName && (
                  <div className="absolute right-0 top-0 h-[100%] px-2 flex items-center justify-center">
                    <Lvl1ComponentsIconError />
                  </div>
                )}
              </div>

              <div className="relative">
                <Field
                  id="lvl1SignupEmail"
                  name="email"
                  placeholder={errors.email? errors.email : "E-mail address"}
                  onChange={handleChange}
                  validate={(email: string) => validateEmail(email, setFieldValue)}
                  value={values.email}
                  type="text"
                  className={`focus:outline-none text-black align-middle border rounded-md py-2 pl-5 pr-12 text-sm font-[600] w-[30vw] h-12 ${
                    errors.email && touched.email
                    ? 'border-[#ff7a7a] focus:border-[#ff7a7a] placeholder:text-[#ff7a7a]'
                    : 'border-[#b9b6d3] focus:border-[#6055a5] placeholder:text-[#b9b6d3]'
                  }`}
                />
                {errors.email && touched.email && (
                  <div className="absolute right-0 top-0 h-[100%] px-2 flex items-center justify-center">
                    <Lvl1ComponentsIconError />
                  </div>
                )}
              </div>

              <div className='relative'>
                <Field
                  id="lvl1SignupPassword"
                  name="password"
                  placeholder={errors.password? errors.password : "Password"}
                  onChange={handleChange}
                  value={values.password}
                  type="password"
                  className={`focus:outline-none text-black align-middle border rounded-md py-2 pl-5 pr-12 text-sm font-[600] w-[30vw] h-12 ${
                    errors.password && touched.password
                    ? 'border-[#ff7a7a] focus:border-[#ff7a7a] placeholder:text-[#ff7a7a]'
                    : 'border-[#b9b6d3] focus:border-[#6055a5] placeholder:text-[#b9b6d3]'
                  }`}
                />
                {errors.password && touched.password && (
                  <div className="absolute right-0 top-0 h-[100%] px-2 flex items-center justify-center">
                    <Lvl1ComponentsIconError />
                  </div>
                )}
              </div>

              <ButtonContainer className="relative my-3">
                <button
                  className="rounded-md bg-[#38cc8c] py-3 w-[100%] text-white font-[600] text-md active:bg-none active:bg-[#27b376]"
                  type="submit"
                >
                  <span>CLAIM YOUR FREE TRIAL</span>
                </button>
                <div className='btnShadow rounded-md'></div>
              </ButtonContainer>
              <h6 className='text-xs text-[#b9b6d3] text-center'>By clicking the button you agree with our <span className='text-[#ff7a7a] font-[600]'>Terms and Services</span></h6>
              
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Lvl1SignupComponent
