import axios from "axios"
import { ACCESS_TOKEN } from "../../constants/Connect";

const BASE_URL = process.env.REACT_APP_BASE_URL;

class MaintenanceService {

  addNewMaintenance(formData) {
    return axios.post(BASE_URL + 'maintenance', formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
      }
    );

  }

  editMaintenanceInfo(id,formData) {
    return axios.put(BASE_URL + 'maintenance/'+ id, formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
        }
      }
    );

  }
}
export default new MaintenanceService();