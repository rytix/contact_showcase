export default function LargePreview() {
  return (
    <>
      <div className="h-100 w-82 md:w-70 lg:w-82 shadow-xl rounded-md overflow-hidden mt-5 mr-2 ml-2">
        <img
          src="https://picsum.photos/200/300"
          alt="img 1"
          className="h-full w-full object-cover"
        />
      </div>
    </>
  );
}
