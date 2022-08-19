export default (number) => {
    const formartNumberinging = new Intl.NumberFormat("id-ID");
    return formartNumberinging.format(number);
  }