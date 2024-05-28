import axios from "axios"
import { ACCESS_TOKEN } from "../../constants/Connect";

const BASE_URL = process.env.REACT_APP_BASE_URL;

class ExportService {

  exportBillRequest(formData) {
    return axios.post(BASE_URL + 'export-bill', formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
      }
    );

  }
}
export default new ExportService();