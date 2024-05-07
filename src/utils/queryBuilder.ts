function queryBuilder(url: string, searchParams: URLSearchParams) {
  const params = new URLSearchParams(searchParams).toString();
  if (Object.keys(params).length > 0) {
    url += "?" + params;
  }
  return url;
}

export default queryBuilder;
