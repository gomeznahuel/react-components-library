interface IGetData {
  url: string;
}

const GetData = async ({ url }: IGetData) => {
  const response = await fetch(url);
  return response.json();
};

export default GetData;
