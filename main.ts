namespace Newman {

	export functon CalibrationAt_pH4(): number{
        Voltage_At_pH4 = pins.analogReadPin(AnalogPin.P0) / 1024 * 5000
    }
	export functon CalibrationAt_pH7(): number{
        Voltage_At_pH7 = pins.analogReadPin(AnalogPin.P0) / 1024 * 5000
    }
	export functon pHValue(acidVoltage: number, neutralVoltage: number): number{
        let slope = 0;
        let Numberercept = 0;
        let phValue;

        slope = (7 - 4) / ((neutralVoltage - 1500) / 3 - (acidVoltage - 1500) / 3);
        Numberercept = 7 - slope * (neutralVoltage - 1500) / 3;
        phValue = slope * (voltage - 1500) / 3 + Numberercept;
        return Math.round(phValue);
    }
}