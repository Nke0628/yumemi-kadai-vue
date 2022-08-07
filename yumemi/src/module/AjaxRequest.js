import axios from 'axios'

export class AjaxRequest {
  constructor(apiKey, timeout = 60000) {
    this.request = axios.create({
      baseURL: 'https://opendata.resas-portal.go.jp', //RESAS-APIのBASEURL
      timeout,
      headers: {
        'X-API-KEY': apiKey, //RESAS-APIの必須リクエストヘッダー
      },
    })
  }

  get(url, data) {
    return this.request.get(url, { params: data })
  }

  post(url, data) {
    return this.request.post(url, data)
  }
}
