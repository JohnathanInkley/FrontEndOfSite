import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {SiteService} from "./site.service";
import { Location } from '@angular/common';
import {SensorListGetterService} from "./sensor-list/sensor-list-getter.service";
import {SensorLabelGetterService} from "./sensor-list/sensor-label-getter.service";
import {SensorDataGetterService} from "./sensor-list/sensor-data-getter.service";

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  site: string;

  dataReady: boolean;
  chartData: Array<any>;
  chartLabels: Array<any>;

  sensorDropdownTitle: string = "Select sensor";
  sensorNames: string[];
  chosenSensor: string;
  sensorsAndLocations: Array<any>;

  labelDropdownTitle: string = "Select label";
  labelNames: string[];
  chosenLabel: string;

  analysisDropdownTitle: string = "Select analysis";
  analysisNames: string[] = ["raw", "mean", "standard deviation"];
  chosenAnalysis: string;
  interval: string = "";
  modulo: string = "";

  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;

  constructor(
    private route: ActivatedRoute,
    private siteService: SiteService,
    private sensorListService: SensorListGetterService,
    private sensorLabelService: SensorLabelGetterService,
    private sensorDataService: SensorDataGetterService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.site = params['siteName']).subscribe();
    this.generateData();
    this.getSensorList();
    this.getSensorLocations()
  }

  private generateData() {

  }

  goBack() {
    this.location.back();
  }

  private getSensorList() {
    this.sensorListService.getSensorsForSite(this.site)
      .then(sensors => this.sensorNames = sensors);
  }

  private getSensorLocations() {
    this.sensorListService.getSensorsAndLocationsForSite(this.site)
      .then(sensorsAndLocations => {
        this.sensorsAndLocations = sensorsAndLocations;
      });
  }

  setChosenSensor(event) {
    this.chosenSensor = event;
    this.getLabelList();
  }

  private getLabelList() {
    this.sensorLabelService.getLabelsForSensor(this.site, this.chosenSensor)
      .then(labels => this.labelNames = labels);
  }

  setChosenLabel(event) {
    this.chosenLabel = event;
  }

  setAnalysisFormat(event) {
    this.chosenAnalysis = event;
  }

  submitTimes() {
    this.sensorDataService.getDataForLabelAndSensor(this.site,
      this.chosenSensor,
      this.chosenAnalysis,
      this.interval,
      this.modulo,
      this.chosenLabel,
      this.startDate,
      this.startTime,
      this.endDate,
      this.endTime)
      .then(data => {
        console.log(data);
        this.chartData = [];
        this.labelNames = [];
        for (let i = 1; i < data.length; i++) {
          this.chartData.push([(data[i - 1])["timestamp"], +(data[i - 1])["value"]]);
        }
      });
    this.dataReady = true;
  }
}
