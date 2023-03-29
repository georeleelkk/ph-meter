namespace Newman {
    /**
     * ReadVoltage
     */
    //% blockId=ReadVoltage block="ReadVoltage"
    export function ReadVoltage(): number {
        return pins.analogReadPin(AnalogPin.P0) / 1024 * 5000;
    }
   

    /**
    * pHValue
    */
    //% blockId=pHValue block="Voltage At pH4 %Voltage_pH4|pH7 %Voltage_pH7"
    //%blockGap=2 weight=1
    export function pH_Value(Voltage_pH4: number, Voltage_pH7: number): number {
        let slope = 0;
        let Numberercept = 0;
        let phValue;

        slope = (7 - 4) / ((Voltage_pH7 - 1500) / 3 - (Voltage_pH4 - 1500) / 3);
        Numberercept = 7 - slope * (Voltage_pH7 - 1500) / 3;
        phValue = slope * ((pins.analogReadPin(AnalogPin.P0) / 1024 * 5000) - 1500) / 3 + Numberercept;
        return Math.round(phValue);
    }

}
