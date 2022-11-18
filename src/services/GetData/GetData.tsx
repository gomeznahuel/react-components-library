interface IGetData {
  url: string;
}

const GetData = async ({ url }: IGetData) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default GetData;
