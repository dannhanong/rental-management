import axios from "axios"
import { ACCESS_TOKEN } from "../../constants/Connect";

const BASE_URL = process.env.REACT_APP_BASE_URL;

class ContractService {

  addNewContract(formData) {
    return axios.post(BASE_URL + 'contract', formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
      }
    );

  }

  editContractInfo(id,formData) {
    return axios.put(BASE_URL + 'contract/'+ id, formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
      }
    );

  }
}
export default new ContractService();