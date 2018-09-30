package com.lorenzolerate.service;

import java.util.List;
import com.lorenzolerate.dao.VehicleDAO;
import com.lorenzolerate.model.Vehicle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("vehicleService")
public class VehicleService {

	@Autowired
	VehicleDAO vehicleDao;

	@Transactional
	public List<Vehicle> getAllVehicles() {
		return vehicleDao.getAllVehicles();
	}

	@Transactional
	public Vehicle getVehicle(int id) {
		return vehicleDao.getVehicle(id);
	}

	@Transactional
	public void addVehicle(Vehicle vehicle) {
		vehicleDao.addVehicle(vehicle);
	}

	@Transactional
	public void updateVehicle(Vehicle vehicle) {
		vehicleDao.updateVehicle(vehicle);

	}

	@Transactional
	public void deleteVehicle(int id) {
		vehicleDao.deleteVehicle(id);
	}

	@Transactional
	public List<Vehicle> getVehiclesByType(int idType) {
		return vehicleDao.getVehicleByType(idType);
	}
}
