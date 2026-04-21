import React, { useState, useEffect } from 'react';
import { Sun, CheckCircle2, ArrowRight, ArrowLeft, User, Home, ShieldCheck, Zap, Info, Star } from 'lucide-react';

type Plan = {
  id: string;
  title: string;
  price: number;
  description: string;
  specs: string[];
};

type UserSubscription = {
  planId: string;
  status: string;
  startDate: string;
  expiryDate: string;
};

type FormData = {
  planId: string;
  phone: string;
  surname: string;
  firstName: string;
  middleName: string;
  gender: string;
  nationality: string;
  dob: string;
  email: string;
  occupation: string;
  houseNumber: string;
  streetName: string;
  city: string;
  lga: string;
  state: string;
  country: string;
  nin: string;
  grantorSurname: string;
  grantorFirstName: string;
  grantorMiddleName: string;
  grantorGender: string;
  grantorNationality: string;
  grantorDob: string;
  grantorEmail: string;
  grantorPhone: string;
  grantorOccupation: string;
  grantorHouseNumber: string;
  grantorStreetName: string;
  grantorCity: string;
  grantorLga: string;
  grantorState: string;
  grantorCountry: string;
  grantorNin: string;
};

const initialFormData: FormData = {
  planId: '',
  phone: '',
  surname: '',
  firstName: '',
  middleName: '',
  gender: '',
  nationality: '',
  dob: '',
  email: '',
  occupation: '',
  houseNumber: '',
  streetName: '',
  city: '',
  lga: '',
  state: '',
  country: '',
  nin: '',
  grantorSurname: '',
  grantorFirstName: '',
  grantorMiddleName: '',
  grantorGender: '',
  grantorNationality: '',
  grantorDob: '',
  grantorEmail: '',
  grantorPhone: '',
  grantorOccupation: '',
  grantorHouseNumber: '',
  grantorStreetName: '',
  grantorCity: '',
  grantorLga: '',
  grantorState: '',
  grantorCountry: '',
  grantorNin: ''
};

export default function SolarOrder() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://live.api.zodapp.com/api';
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [userSub, setUserSub] = useState<UserSubscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [plansRes, subRes] = await Promise.all([
          fetch(`${API_BASE_URL}/subscription/solar/plans`),
          fetch(`${API_BASE_URL}/subscription/solar`)
        ]);

        if (plansRes.ok) {
          const plansData = await plansRes.json();
          setPlans(plansData);
        } else {
          setPlans([
            { id: 'plan-300w', title: '300W & 100W Panel', price: 50000, description: 'Perfect for small energy needs.', specs: ['300W Inverter', '100W Solar Panel'] },
            { id: 'plan-1000w', title: '1000W & 450W Panel', price: 150000, description: 'Ideal for medium homes.', specs: ['1000W Inverter', '450W Solar Panel'] },
            { id: 'plan-3300w', title: '3300W & 1300W Panels', price: 500000, description: 'High capacity for full home.', specs: ['3300W Inverter', '1300W Solar Panels'] }
          ]);
        }

        if (subRes.ok) {
          const subData = await subRes.json();
          setUserSub(subData);
        }
      } catch (err) {
        console.error('Error fetching solar info:', err);
        setError('Failed to load solar information.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  const handlePlanSelect = (planId: string) => {
    setFormData({ ...formData, planId });
    setStep(2);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/subscription/solar/public`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSuccessMessage(data.message);
        setStep(5);
        const subRes = await fetch(`${API_BASE_URL}/subscription/solar`);
        if (subRes.ok) setUserSub(await subRes.json());
      } else {
        setError(data.message || 'Failed to submit subscription.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setError('An error occurred during submission.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateStep = (currentStep: number) => {
    if (currentStep === 2) {
      const buyerFields: (keyof FormData)[] = [
        'surname', 'firstName', 'gender', 'nationality', 'email', 'phone', 'occupation', 'nin',
        'houseNumber', 'streetName', 'city', 'lga', 'state', 'country'
      ];
      return buyerFields.every(field => formData[field]?.trim());
    }
    if (currentStep === 3) {
      const grantorFields: (keyof FormData)[] = [
        'grantorSurname', 'grantorFirstName', 'grantorGender', 'grantorNationality', 'grantorEmail', 'grantorPhone', 'grantorOccupation', 'grantorNin',
        'grantorHouseNumber', 'grantorStreetName', 'grantorCity', 'grantorLga', 'grantorState', 'grantorCountry'
      ];
      return grantorFields.every(field => formData[field]?.trim());
    }
    return true;
  };

  const renderStep = () => {
    if (loading) return (
      <div className="flex flex-col items-center justify-center py-32 space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
          <Zap className="w-6 h-6 text-cyan-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        </div>
        <p className="text-gray-400 font-medium animate-pulse tracking-wide italic">Powering up the grid...</p>
      </div>
    );

    const StepIndicator = () => (
      <div className="flex items-center justify-center mb-16 gap-3">
        {[1, 2, 3, 4].map((s) => (
          <React.Fragment key={s}>
            <div 
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                step === s 
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/40 scale-110' 
                  : step > s 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-white/5 text-gray-500 border border-white/10'
              }`}
            >
              {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
            </div>
            {s < 4 && <div className={`w-12 h-0.5 rounded-full ${step > s ? 'bg-emerald-500' : 'bg-white/10'}`} />}
          </React.Fragment>
        ))}
      </div>
    );

    if (userSub && step !== 5) {
      const activePlan = plans.find(p => p.id === userSub.planId);
      return (
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/10 animate-fade-in text-center">
          <div className="bg-cyan-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Active Subscription</h2>
          <p className="text-gray-400 mb-8">You are currently subscribed to the solar program.</p>
          
          <div className="grid grid-cols-2 gap-6 text-left mb-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Plan</p>
              <p className="text-lg font-bold text-cyan-400">{activePlan?.title || userSub.planId}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Status</p>
              <p className="text-lg font-bold text-emerald-400 uppercase">{userSub.status}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Start Date</p>
              <p className="text-white font-medium">{new Date(userSub.startDate).toLocaleDateString()}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Expiry Date</p>
              <p className="text-white font-medium">{new Date(userSub.expiryDate).toLocaleDateString()}</p>
            </div>
          </div>
          
          <button 
            onClick={() => setUserSub(null)}
            className="text-gray-500 hover:text-white text-sm transition-colors"
          >
            Change Subscription
          </button>
        </div>
      );
    }

    switch (step) {
      case 1:
        return (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-2">
                <Sun className="w-4 h-4 animate-spin-slow" /> Solar Energy Plans
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Power Solution</span></h2>
              <p className="text-lg text-gray-400">High-performance solar systems designed for durability and efficiency.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`group relative p-8 rounded-[2rem] border-2 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                    formData.planId === plan.id
                      ? 'border-cyan-500 bg-cyan-500/5 ring-4 ring-cyan-500/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                  onClick={() => handlePlanSelect(plan.id)}
                >
                  {plan.id === '1000w' && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-bold text-white shadow-xl flex items-center gap-1.5 uppercase tracking-widest z-20">
                      <Star className="w-3.5 h-3.5 fill-white" /> Popular Choice
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${
                      formData.planId === plan.id ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30' : 'bg-white/10 text-cyan-400'
                    }`}>
                      <Zap className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{plan.title}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-extrabold text-white">₦{plan.price.toLocaleString()}</span>
                      <span className="text-gray-500 font-medium tracking-wide"> / pkg</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-8">{plan.description}</p>
                    
                    <ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
                      {plan.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          </div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all transform active:scale-95 ${
                      formData.planId === plan.id 
                      ? 'bg-cyan-500 text-white shadow-xl shadow-cyan-500/40' 
                      : 'bg-white/10 text-white hover:bg-white/15'
                    }`}>
                      {formData.planId === plan.id ? 'Selected Plan' : 'Choose Plan'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <StepIndicator />
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-xl shadow-2xl space-y-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest">
                  <User className="w-4 h-4" /> Personal Details
                </div>
                <h2 className="text-4xl font-extrabold text-white">Buyer Information</h2>
                <p className="text-gray-400 text-lg">Help us get to know you better for a customized service.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <Input icon={<User />} label="Full Surname" value={formData.surname} onChange={(v) => updateField('surname', v)} placeholder="e.g., Doe" />
                <Input icon={<User />} label="First Given Name" value={formData.firstName} onChange={(v) => updateField('firstName', v)} placeholder="e.g., John" />
                <Input icon={<User />} label="Middle Initial/Name" value={formData.middleName} onChange={(v) => updateField('middleName', v)} placeholder="Optional" />
                <Select icon={<ShieldCheck />} label="Biological Gender" value={formData.gender} options={['Male', 'Female', 'Non-binary']} onChange={(v) => updateField('gender', v)} />
                <Input icon={<Info />} label="Home Nationality" value={formData.nationality} onChange={(v) => updateField('nationality', v)} placeholder="e.g., Nigerian" />
                <Input icon={<Info />} label="Date of Birth" type="date" value={formData.dob} onChange={(v) => updateField('dob', v)} required={false} />
                <Input icon={<Info />} label="Personal Email" type="email" value={formData.email} onChange={(v) => updateField('email', v)} placeholder="hello@zod.com" />
                <Input icon={<Info />} label="Mobile Phone" type="tel" value={formData.phone} onChange={(v) => updateField('phone', v)} placeholder="+234..." />
                <Input icon={<Info />} label="Current Occupation" value={formData.occupation} onChange={(v) => updateField('occupation', v)} placeholder="e.g., Tech Professional" />
                <Input icon={<ShieldCheck />} label="National ID (NIN)" value={formData.nin} onChange={(v) => updateField('nin', v)} placeholder="11-digit number" />
              </div>

              <div className="space-y-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Home className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">Residential Address</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <Input label="House/Bldg No." value={formData.houseNumber} onChange={(v) => updateField('houseNumber', v)} />
                  <Input label="Street Address" value={formData.streetName} onChange={(v) => updateField('streetName', v)} />
                  <Input label="City/Locality" value={formData.city} onChange={(v) => updateField('city', v)} />
                  <Input label="LGA/District" value={formData.lga} onChange={(v) => updateField('lga', v)} />
                  <Input label="Region/State" value={formData.state} onChange={(v) => updateField('state', v)} />
                  <Input label="Country Origin" value={formData.country} onChange={(v) => updateField('country', v)} />
                </div>
              </div>

              <div className="flex items-center justify-between pt-12">
                <button onClick={() => setStep(1)} className="group flex items-center gap-3 text-gray-400 hover:text-white font-bold text-lg transition-all">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 group-hover:-translate-x-1 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                  </div>
                  Back to Plans
                </button>
                <button 
                  onClick={() => validateStep(2) ? setStep(3) : setError('Please fill in all mandatory fields.')} 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all flex items-center gap-3 group"
                >
                  Continue to Guarantor <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <StepIndicator />
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-xl shadow-2xl space-y-12">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" /> Trusted Contact
                </div>
                <h2 className="text-4xl font-extrabold text-white">Guarantor Information</h2>
                <p className="text-gray-400 text-lg">We need a secondary contact to verify your subscription.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <Input icon={<User />} label="Guarantor Surname" value={formData.grantorSurname} onChange={(v) => updateField('grantorSurname', v)} />
                <Input icon={<User />} label="Guarantor First Name" value={formData.grantorFirstName} onChange={(v) => updateField('grantorFirstName', v)} />
                <Input icon={<User />} label="Guarantor Middle Name" value={formData.grantorMiddleName} onChange={(v) => updateField('grantorMiddleName', v)} />
                <Select icon={<ShieldCheck />} label="Guarantor Gender" value={formData.grantorGender} options={['Male', 'Female', 'Other']} onChange={(v) => updateField('grantorGender', v)} />
                <Input icon={<Info />} label="Nationality" value={formData.grantorNationality} onChange={(v) => updateField('grantorNationality', v)} />
                <Input icon={<Info />} label="Date of Birth" type="date" value={formData.grantorDob} onChange={(v) => updateField('grantorDob', v)} required={false} />
                <Input icon={<Info />} label="Email Primary" type="email" value={formData.grantorEmail} onChange={(v) => updateField('grantorEmail', v)} />
                <Input icon={<Info />} label="Contact Phone" type="tel" value={formData.grantorPhone} onChange={(v) => updateField('grantorPhone', v)} />
                <Input icon={<Info />} label="Profession" value={formData.grantorOccupation} onChange={(v) => updateField('grantorOccupation', v)} />
                <Input icon={<ShieldCheck />} label="NIN Identification" value={formData.grantorNin} onChange={(v) => updateField('grantorNin', v)} />
              </div>

              <div className="space-y-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Home className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">Residential Address</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <Input label="House No." value={formData.grantorHouseNumber} onChange={(v) => updateField('grantorHouseNumber', v)} />
                  <Input label="Street Name" value={formData.grantorStreetName} onChange={(v) => updateField('grantorStreetName', v)} />
                  <Input label="City" value={formData.grantorCity} onChange={(v) => updateField('grantorCity', v)} />
                  <Input label="LGA" value={formData.grantorLga} onChange={(v) => updateField('grantorLga', v)} />
                  <Input label="State" value={formData.grantorState} onChange={(v) => updateField('grantorState', v)} />
                  <Input label="Country" value={formData.grantorCountry} onChange={(v) => updateField('grantorCountry', v)} />
                </div>
              </div>

              <div className="flex items-center justify-between pt-12">
                <button onClick={() => setStep(2)} className="group flex items-center gap-3 text-gray-400 hover:text-white font-bold text-lg transition-all">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 group-hover:-translate-x-1 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                  </div>
                  Back Details
                </button>
                <button 
                  onClick={() => validateStep(3) ? setStep(4) : setError('Please fill in all mandatory fields.')}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex items-center gap-3 group"
                >
                  Review Your Order <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        );

      case 4:
        const selectedPlan = plans.find(p => p.id === formData.planId);
        return (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <StepIndicator />
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 md:p-14 backdrop-blur-xl shadow-2xl space-y-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-br from-cyan-500/10 to-transparent blur-[80px] -z-10"></div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 text-cyan-400 bg-cyan-400/10 px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest">
                  <Zap className="w-4 h-4" /> Final Check
                </div>
                <h2 className="text-4xl font-extrabold text-white">Review Summary</h2>
                <p className="text-gray-400 text-lg">Please double-check all information before finalizing.</p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                    <div className="flex items-center gap-3 text-cyan-400 border-b border-white/10 pb-4">
                      <User className="w-5 h-5" />
                      <h3 className="font-bold text-lg">Buyer Details</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                      <div><span className="text-gray-500 block mb-0.5">Full Name</span> <span className="text-white font-medium">{formData.firstName} {formData.surname}</span></div>
                      <div><span className="text-gray-500 block mb-0.5">Email</span> <span className="text-white font-medium truncate">{formData.email}</span></div>
                      <div><span className="text-gray-500 block mb-0.5">Phone</span> <span className="text-white font-medium">{formData.phone}</span></div>
                      <div><span className="text-gray-500 block mb-0.5">NIN</span> <span className="text-white font-medium">{formData.nin}</span></div>
                    </div>
                  </div>

                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                    <div className="flex items-center gap-3 text-emerald-400 border-b border-white/10 pb-4">
                      <ShieldCheck className="w-5 h-5" />
                      <h3 className="font-bold text-lg">Guarantor Details</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-y-4 text-sm">
                      <div><span className="text-gray-500 block mb-0.5">Full Name</span> <span className="text-white font-medium">{formData.grantorFirstName} {formData.grantorSurname}</span></div>
                      <div><span className="text-gray-500 block mb-0.5">Professional Origin</span> <span className="text-white font-medium">{formData.grantorOccupation}</span></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-700 shadow-xl space-y-8 sticky top-8">
                    <div className="space-y-2">
                      <div className="text-cyan-200 text-xs font-bold uppercase tracking-widest">Selected Solution</div>
                      <h3 className="text-3xl font-black text-white">{selectedPlan?.title}</h3>
                    </div>
                    
                    <div className="space-y-4 border-t border-white/20 pt-6">
                      <div className="flex justify-between items-center group">
                        <span className="text-cyan-100/70 font-medium">System Cost</span>
                        <span className="text-white font-bold group-hover:scale-105 transition-transform">₦{selectedPlan?.price.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center group">
                        <span className="text-cyan-100/70 font-medium">Installation</span>
                        <span className="text-emerald-300 font-black">FREE</span>
                      </div>
                      <div className="pt-2 flex justify-between items-center text-xl">
                        <span className="text-white font-black">Total</span>
                        <span className="text-white font-black">₦{selectedPlan?.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
                      <ul className="space-y-2">
                        {selectedPlan?.specs.slice(0, 2).map((spec, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-cyan-50 text-emerald-300">
                             <CheckCircle2 className="w-3.5 h-3.5" />
                             {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 pt-10 border-t border-white/10">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-4 rounded-2xl flex items-center gap-3 text-sm font-bold animate-shake">
                    <Info className="w-5 h-5 flex-shrink-0" /> {error}
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <button onClick={() => setStep(3)} className="text-gray-400 hover:text-white font-bold text-lg transition-all underline underline-offset-8 decoration-gray-400/20 hover:decoration-white">
                    Need to change something?
                  </button>
                  <button 
                    onClick={handleSubmit} 
                    disabled={isSubmitting}
                    className="flex-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white py-6 rounded-3xl font-black text-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] transition-all disabled:opacity-50 flex items-center justify-center gap-4 group active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-7 h-7 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                        Securing Space...
                      </>
                    ) : (
                      <>
                        Confirm and Pay <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-xl mx-auto text-center py-20 animate-fade-in relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
            
            <div className="relative mb-12">
              <div className="bg-emerald-500 w-32 h-32 rounded-[2.5rem] rotate-12 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-[2.5rem] bg-emerald-400/20 animate-ping"></div>
              <CheckCircle2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 text-white" />
            </div>

            <h2 className="text-5xl font-black text-white mb-6">Mission Accomplished!</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-medium">
              {successMessage || "We've received your data and registered your interest in our solar energy program. Expect a call from our technical team within 24 hours."}
            </p>
            
            <div className="flex flex-col gap-4">
               <button 
                onClick={() => { setStep(1); setFormData(initialFormData); setUserSub(null); }}
                className="bg-white text-black px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-200 transition-all shadow-xl active:scale-95"
              >
                Return to Dashboard
              </button>
              <button className="text-gray-500 font-bold hover:text-white transition-colors py-4">
                Download Receipt PDF
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="solar">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {renderStep()}
      </div>
    </section>
  );
}

function Input({ label, value, onChange, type = 'text', placeholder = '', icon, required = true }: { label: string, value: string, onChange: (v: string) => void, type?: string, placeholder?: string, icon?: React.ReactNode, required?: boolean }) {
  return (
    <div className="space-y-2.5 group">
      <label className="text-sm font-bold text-gray-400 ml-1 tracking-wide group-focus-within:text-cyan-400 transition-colors uppercase">
        {label} {!required && <span className="text-xs text-gray-600 lowecase">(Optional)</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-500 transition-colors">
            {React.cloneElement(icon as React.ReactElement, { size: 18 })}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-white/5 border border-white/10 rounded-2xl ${icon ? 'pl-11' : 'px-5'} py-4 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all hover:bg-white/[0.07]`}
          required={required}
        />
      </div>
    </div>
  );
}

function Select({ label, value, options, onChange, icon }: { label: string, value: string, options: string[], onChange: (v: string) => void, icon?: React.ReactNode }) {
  return (
    <div className="space-y-2.5 group">
      <label className="text-sm font-bold text-gray-400 ml-1 tracking-wide group-focus-within:text-cyan-400 transition-colors uppercase">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-500 transition-colors">
            {React.cloneElement(icon as React.ReactElement, { size: 18 })}
          </div>
        )}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-white/5 border border-white/10 rounded-2xl ${icon ? 'pl-11' : 'px-5'} py-4 text-white focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all appearance-none hover:bg-white/[0.07]`}
          required
        >
          <option value="" disabled className="bg-gray-950">Select {label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-gray-900 text-white">{opt}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </div>
  );
}
