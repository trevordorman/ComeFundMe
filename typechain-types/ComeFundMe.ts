/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace ComeFundMe {
  export type CampaignStruct = {
    isAlive: boolean;
    initiator: string;
    fundsRaised: BigNumberish;
    title: string;
    description: string;
  };

  export type CampaignStructOutput = [
    boolean,
    string,
    BigNumber,
    string,
    string
  ] & {
    isAlive: boolean;
    initiator: string;
    fundsRaised: BigNumber;
    title: string;
    description: string;
  };
}

export interface ComeFundMeInterface extends utils.Interface {
  contractName: "ComeFundMe";
  functions: {
    "donateToCampaign(bytes32)": FunctionFragment;
    "endCampaign(bytes32)": FunctionFragment;
    "getCampaign(bytes32)": FunctionFragment;
    "getCampaignId(address,string,string)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "startCampaign(string,string)": FunctionFragment;
    "togglePause()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "donateToCampaign",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "endCampaign",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaign",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCampaignId",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startCampaign",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "togglePause",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "donateToCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCampaignId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "togglePause",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "CampaignDonationReceived(bytes32,address,uint256)": EventFragment;
    "CampaignEnded(bytes32,uint256)": EventFragment;
    "CampaignStarted(bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CampaignDonationReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CampaignEnded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CampaignStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type CampaignDonationReceivedEvent = TypedEvent<
  [string, string, BigNumber],
  { campaignId: string; donor: string; amount: BigNumber }
>;

export type CampaignDonationReceivedEventFilter =
  TypedEventFilter<CampaignDonationReceivedEvent>;

export type CampaignEndedEvent = TypedEvent<
  [string, BigNumber],
  { campaignId: string; fundsRaised: BigNumber }
>;

export type CampaignEndedEventFilter = TypedEventFilter<CampaignEndedEvent>;

export type CampaignStartedEvent = TypedEvent<[string], { campaignId: string }>;

export type CampaignStartedEventFilter = TypedEventFilter<CampaignStartedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface ComeFundMe extends BaseContract {
  contractName: "ComeFundMe";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComeFundMeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    donateToCampaign(
      campaignId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    endCampaign(
      campaignId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCampaign(
      campaignId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[ComeFundMe.CampaignStructOutput]>;

    getCampaignId(
      initiator: string,
      title: string,
      description: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startCampaign(
      title: string,
      description: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    togglePause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  donateToCampaign(
    campaignId: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  endCampaign(
    campaignId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCampaign(
    campaignId: BytesLike,
    overrides?: CallOverrides
  ): Promise<ComeFundMe.CampaignStructOutput>;

  getCampaignId(
    initiator: string,
    title: string,
    description: string,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startCampaign(
    title: string,
    description: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  togglePause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    donateToCampaign(
      campaignId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    endCampaign(
      campaignId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getCampaign(
      campaignId: BytesLike,
      overrides?: CallOverrides
    ): Promise<ComeFundMe.CampaignStructOutput>;

    getCampaignId(
      initiator: string,
      title: string,
      description: string,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    startCampaign(
      title: string,
      description: string,
      overrides?: CallOverrides
    ): Promise<void>;

    togglePause(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CampaignDonationReceived(bytes32,address,uint256)"(
      campaignId?: null,
      donor?: null,
      amount?: null
    ): CampaignDonationReceivedEventFilter;
    CampaignDonationReceived(
      campaignId?: null,
      donor?: null,
      amount?: null
    ): CampaignDonationReceivedEventFilter;

    "CampaignEnded(bytes32,uint256)"(
      campaignId?: null,
      fundsRaised?: null
    ): CampaignEndedEventFilter;
    CampaignEnded(
      campaignId?: null,
      fundsRaised?: null
    ): CampaignEndedEventFilter;

    "CampaignStarted(bytes32)"(campaignId?: null): CampaignStartedEventFilter;
    CampaignStarted(campaignId?: null): CampaignStartedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    donateToCampaign(
      campaignId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    endCampaign(
      campaignId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCampaign(
      campaignId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCampaignId(
      initiator: string,
      title: string,
      description: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startCampaign(
      title: string,
      description: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    togglePause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    donateToCampaign(
      campaignId: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    endCampaign(
      campaignId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCampaign(
      campaignId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCampaignId(
      initiator: string,
      title: string,
      description: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startCampaign(
      title: string,
      description: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    togglePause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
