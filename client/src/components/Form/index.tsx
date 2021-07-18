import cx from 'classnames'
import React, { Dispatch, FC, useState, useEffect, SetStateAction, ChangeEvent, FormEvent } from "react";
import axios, { AxiosResponse } from "axios";

import { IUseState } from '../../interfaces'

import styles from './styles.module.scss'

const Form: FC = () => {
  const [nameValue, setNameValue]: IUseState<string> = useState("");
  const [companyValue, setCompanyValue]: IUseState<string> = useState("");
  const [response, setResponse]: IUseState<string> = useState("")
  const [errorMessage, setErrorMessage]: IUseState<string> = useState("")
  const [isProcessing, setIsProcessing]: IUseState<boolean> = useState<boolean>(false);
  const [isExpanded, setIsExpanded]: IUseState<boolean> = useState<boolean>(false)

  useEffect(() => {
    setIsExpanded(true)
  }, [isExpanded])

  const handleChange = (changeFunc: Dispatch<SetStateAction<string>>, value: string) => {
    if (response !== '') {
      setResponse('')
    }

    if (errorMessage !== '') {
      setErrorMessage('')
    }

    changeFunc(value)
  }

  const resetForm = () => {
    setNameValue("");
    setCompanyValue("")
    setIsProcessing(false);
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setIsProcessing(true);

    let response: AxiosResponse | null

    try {
      response = await axios.post(
        `${process.env.API_URL}/handler`,
        { name: nameValue.toLowerCase(), company: companyValue.toLowerCase() },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      setErrorMessage(error.response.data)
      resetForm()
      return
    }

    setResponse(response!.data.email);
    resetForm()
  }

  return (
    <form data-test="form" onSubmit={handleSubmit} className={cx(styles.container, { [styles.isExpanded]: isExpanded })}>
      <input
        name="fullName"
        placeholder="Full name e.g. John Smith"
        value={nameValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(setNameValue, event.target.value)}
      />
      <input
        name="company"
        placeholder="Company domain e.g. google.com"
        value={companyValue}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(setCompanyValue, event.target.value)}
      />
      <button type="submit" disabled={isProcessing}>
        Submit
      </button>
      {response !== '' ? <p data-test="response-email">{response}</p> : null}
      {errorMessage !== '' ? <p data-test="error">{errorMessage}</p> : null}
    </form>
  );
};

export default Form;
