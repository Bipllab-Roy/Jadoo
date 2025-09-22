
const DestinationHeading = ({heading, subHeading}) => {
  return (
    <div className='text-center pb-[50px]'>
      <p className='text-[18px] font-semibold font-poppins uppercase'>{subHeading}</p>
      <h2 className='text-[50px] font-bold font-volkhov'>{heading}</h2>
    </div>
  )
}

export default DestinationHeading
