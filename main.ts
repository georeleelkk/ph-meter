//% weight=0 color=#3CB371 icon="\uf0ad" block="Newman"
namespace Newman {
    /**
     * CalibrationAt_pH4
     */
    //% blockId=CalibrationAt_pH4 block="CalibrationAt_pH4"
	export function CalibrationAt_pH4(): number {
        return pins.analogReadPin(AnalogPin.P0) / 1024 * 5000;
    }

    /**
     * CalibrationAt_pH7
     */
    //% blockId=CalibrationAt_pH7 block="CalibrationAt_pH7"
	export function CalibrationAt_pH7(): number {
        return pins.analogReadPin(AnalogPin.P0) / 1024 * 5000;
    }

    /**
    * pHValue
    */
    //% blockId=pHValue block="Voltage At pH4 %acidVoltage|pH7 %VoltageAtpH7"
    //%blockGap=2 weight=1
	export function pHValue(acidVoltage: number, neutralVoltage: number): number {
        let slope = 0;
        let Numberercept = 0;
        let phValue;

        slope = (7 - 4) / ((neutralVoltage - 1500) / 3 - (acidVoltage - 1500) / 3);
        Numberercept = 7 - slope * (neutralVoltage - 1500) / 3;
        phValue = slope * ((pins.analogReadPin(AnalogPin.P0) / 1024 * 5000) - 1500) / 3 + Numberercept;
        return Math.round(phValue);
    }
   
}