export default {

  masterMeter: (analyser, sampleBuffer) => {
    const computeLevel = (value) => {
      const meters = document.querySelectorAll('.main-master-meter');
      meters.forEach((meter) => {
        // eslint-disable-next-line no-param-reassign
        meter.value = Number.isFinite(value) ? value : meter.min;
      });
    };

    const loop = () => {
      analyser.getFloatTimeDomainData(sampleBuffer);

      let peak = 0;
      for (let i = 0; i < sampleBuffer.length; i += 1) {
        const power = sampleBuffer[i] ** 2;
        peak = Math.max(power, peak);
      }
      const peakDb = 10 * Math.log10(peak);
      computeLevel(peakDb);

      requestAnimationFrame(loop);
    };
    loop();
  },

  mixMeter: (analyser, sampleBuffer, inst) => {
    const computeLevel = (value) => {
      const meter = document.querySelector(`#mix-meter-${inst}`);
      meter.value = Number.isFinite(value) ? value : meter.min;
    };

    const loop = () => {
      analyser.getFloatTimeDomainData(sampleBuffer);

      let peak = 0;
      for (let i = 0; i < sampleBuffer.length; i += 1) {
        const power = sampleBuffer[i] ** 2;
        peak = Math.max(power, peak);
      }
      const peakDb = 10 * Math.log10(peak);
      computeLevel(peakDb);

      requestAnimationFrame(loop);
    };
    loop();
  },
};
