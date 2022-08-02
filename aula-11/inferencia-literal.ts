function didRequest (url: string, method: 'GET' | 'POST') {
  //..... Código omitido.....//
}

type ReqDetails = {
  url: string,
  method: 'GET' | 'POST'
}

const req: ReqDetails = {
  url: 'https://google.com',
  method: 'GET'
}

didRequest(req.url, req.method)
