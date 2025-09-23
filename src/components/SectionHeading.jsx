

const SectionHeading = ({heading, subHeading, align="center"}) => {
 if (align==="center") {
   return (
    <div className="text-center pb-[68px]">
       <p className="text-[18px] font-poppins font-semibold uppercase">{subHeading}</p>
      <h2 className="text-[50px] font-bold font-volkhov">{heading}</h2>

    </div>
  )
 }
 if (align==="left") {
   return (
    <div className="pb-[68px]">
       <p className="text-[18px] font-poppins font-semibold uppercase">{subHeading}</p>
      <h2 className="text-[50px] font-bold font-volkhov">{heading}</h2>

    </div>
  )
 }

//another option

// return (
//     <div className={`text-${align==="left" ? "left" : "center"} pb-[68px]`}>
//        <p className="text-[18px] font-poppins font-semibold uppercase">{subHeading}</p>
//       <h2 className="text-[50px] font-bold font-volkhov">{heading}</h2>

//     </div>
//   )


}

export default SectionHeading



