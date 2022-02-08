// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.750.1/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject2;
        (function (TcHmiProject2) {
            function FunctionJS1(combobox) {
                console.log(combobox.getSelectedText());
            }
            TcHmiProject2.FunctionJS1 = FunctionJS1;
        })(TcHmiProject2 = Functions.TcHmiProject2 || (Functions.TcHmiProject2 = {}));
        Functions.registerFunctionEx('FunctionJS1', 'TcHmi.Functions.TcHmiProject2', TcHmiProject2.FunctionJS1);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);