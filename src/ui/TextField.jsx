function TextField({name,labelText,register,type,errors,required,validationSchema}) {
  return (
    <>
    <label 
    className={'font-bYekan text-md mt-2 font-normal text-right text-secondary-900'}
     htmlFor={name}>
       {labelText} {required && <span className="text-red-700 text-xl">*</span>}
    </label>
      <input
      {...register(name,validationSchema)}
      name={name}
      autoComplete='off'
      id={name}
      autoFocus={true}
       className={'textField__input mt-3 border border-gray-300'} type={type}
       />
      {errors && errors[name] && <span className="text-error text-right mt-2 font-bYekan text-base">{errors[name]?.message}</span>}
    </>    
  )
}

export default TextField