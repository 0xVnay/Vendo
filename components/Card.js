const Card = ({ imageUrl, heading, subHeading, onClick, id }) => {
  return (
    <div
      data-testid={id}
      onClick={onClick}
      className="flex cursor-pointer flex-col rounded-lg bg-[#121212] p-4 hover:bg-[#1e1e1e]"
    >
      <img className="shadow-2xla rounded-md" src={imageUrl} alt={heading} />
      <h3 className="mt-3 cursor-pointer truncate text-lg font-bold hover:text-white">
        {heading}
      </h3>
      <p className="text-md cursor-pointer text-[#999] hover:text-white ">
        {subHeading}
      </p>
    </div>
  )
}

export default Card
