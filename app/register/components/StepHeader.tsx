import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function StepHeader({ step }: { step: number }) {
  return (
    <CardHeader>
      <CardTitle>
        {step === 1 && "معلومات المشروع"}
        {step === 2 && "أعضاء الفريق"}
        {step === 3 && "مراجعة البيانات"}
      </CardTitle>
      <CardDescription>
        {step === 1 && "أدخل المعلومات الأساسية عن مشروعك"}
        {step === 2 && "أضف أعضاء فريق المشروع"}
        {step === 3 && "راجع جميع البيانات قبل الإرسال"}
      </CardDescription>
    </CardHeader>
  );
}
