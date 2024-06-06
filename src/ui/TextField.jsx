function TextField({name,labelText,register,type,errors,required,validationSchema}) {
  return (
    <>
    <label 
    className={'font-vazir text-md mt-2 font-normal text-right text-black'}
     htmlFor={name}>
       {labelText} {required && <span className="text-red-700">*</span>}
    </label>
      <input
      {...register(name,validationSchema)}
      name={name}
      autoComplete='off'
      // required={required}
      id={name}
       className={'textField__input mt-3 border border-gray-300'} type={type}
       />
      {errors && errors[name] && <span className="text-red-500">{errors[name]?.message}</span>}
    </>    
  )
}

export default TextField