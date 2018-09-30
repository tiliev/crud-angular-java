package com.lorenzolerate.contr;


import java.util.List;

import com.google.gson.Gson;
import com.lorenzolerate.model.Vehicle;
import com.lorenzolerate.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class VehicleController {
	
	@Autowired
	VehicleService vehicleService;
		
	@RequestMapping(value = "/getAllVehicles", method = RequestMethod.GET, produces = "application/json")
	@CrossOrigin(origins="https://stackblitz.com")
	public String getVehicles(Model model) {		
		List<Vehicle> listOfVehicles = vehicleService.getAllVehicles();
		model.addAttribute("vehicle", new Vehicle());
		model.addAttribute("listOfVehicles", listOfVehicles);
		return new Gson().toJson(listOfVehicles);
	}
	
	@RequestMapping(value = "/getVehiclesByType/{idType}", method = RequestMethod.GET, produces = "application/json")
	public String getVehiclesByType(@PathVariable int idType) {		
		List<Vehicle> listOfVehicles = vehicleService.getVehiclesByType(idType);
		return new Gson().toJson(listOfVehicles);
	}

	@CrossOrigin(origins = "https://stackblitz.com/")
	@RequestMapping(value = "/getVehicle/{idVehicle}", method = RequestMethod.GET, produces = "application/json")
	public String getVehicleById(@PathVariable int idVehicle) {
		Vehicle vehicle = vehicleService.getVehicle(idVehicle);
		return new Gson().toJson(vehicle);
	}

	@RequestMapping(value = "/addVehicle", method = RequestMethod.POST, headers = "Accept=application/json")
	public void addVehicle(@RequestBody Vehicle vehicle) {	
		if(vehicle.getIdVehicle()==0)
		{
			vehicleService.addVehicle(vehicle);
		}
		else
		{	
			vehicleService.updateVehicle(vehicle);
		}
	}

	@RequestMapping(value = "/updateVehicle/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public void updateVehicle(@PathVariable("id") int id,Model model) {
		 model.addAttribute("vehicle", this.vehicleService.getVehicle(id));
	        model.addAttribute("listOfVehicles", this.vehicleService.getAllVehicles());
	}

	@RequestMapping(value = "/deleteVehicle/{id}", method = RequestMethod.GET, headers = "Accept=application/json")
	public void deleteVehicle(@PathVariable("id") int id) {
		vehicleService.deleteVehicle(id);

	}	
}
